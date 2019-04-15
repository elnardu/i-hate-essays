from os import path

import markovify

from . import Predictor

CORPUS_PATH = path.join(path.dirname(path.abspath(
    __file__)), 'markov', 'asap-aes-corpus.txt')


class MarkovPredictor(Predictor):
    def __init__(self):
        self.state_size = 2

        # Get raw text as string.
        with open(CORPUS_PATH) as f:
            text = f.read()

        # Build the model.
        self.model = markovify.Text(text, state_size=self.state_size)

    def predict(self, text, cursor):
        text = text.split('\n')
        
        line = cursor['line']
        ch = cursor['ch']

        last_lines = text[
            line - 3 if line - 3 >= 0 else 0
            : line
        ]

        try:
            starting_text = " ".join(last_lines) + " " + text[line][:ch]
            starting_text = " ".join(starting_text.split()[-self.state_size:])
            print(starting_text)
            return self.model.make_sentence_with_start(starting_text)
        except KeyError:
            return None

    def get_name(self):
        return "Markov Chain"
