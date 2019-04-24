import argparse
import os
import random
import sys
from os import path

import numpy as np
import torch

sys.path.append(path.join(path.dirname(path.abspath(
    __file__)), 'gpt-2-Pytorch'))

from GPT2.config import GPT2Config
from GPT2.encoder import get_encoder
from GPT2.model import GPT2LMHeadModel
from GPT2.sample import sample_sequence
from GPT2.utils import load_weight

from . import Predictor


class GPT2Predictor(Predictor):
    def __init__(self):

        state_dict = torch.load((path.join(path.dirname(path.abspath(
            __file__)), 'gpt-2-Pytorch', 'gpt2-pytorch_model.bin')), map_location='cpu' if not torch.cuda.is_available() else None)

        batch_size = 1

        # assert nsamples % batch_size == 0

        seed = random.randint(0, 2147483647)
        np.random.seed(seed)
        torch.random.manual_seed(seed)
        torch.cuda.manual_seed(seed)
        device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

        # Load Model
        enc = get_encoder()
        config = GPT2Config()
        model = GPT2LMHeadModel(config)
        model = load_weight(model, state_dict)
        model.to(device)
        model.eval()


        length = -1
        if length == -1:
            length = config.n_ctx // 2
        elif length > config.n_ctx:
            raise ValueError(
                "Can't get samples longer than window size: %s" % config.n_ctx)
        
        self.enc = enc
        self.batch_size = batch_size
        self.model = model
        self.length = 20
        self.device = device

    def predict(self, text, cursor):
        print(text)
        # text = text.split('\n')

        # line = cursor['line']
        # ch = cursor['ch']

        # last_lines = text[
        #     line - 3 if line - 3 >= 0 else 0
        #     : line
        # ]

        # try:
        #     starting_text = " ".join(last_lines) + " " + text[line][:ch]
        #     starting_text = " ".join(starting_text.split()[-self.state_size:])
        #     starting_text = starting_text.lower()
        #     print(starting_text)
        #     result = []
        #     for _ in range(3):
        #         result.append(self.model.make_sentence_with_start(starting_text))
        #     print(result)
        #     return result
        # except KeyError:
        #     return None

        context_tokens = self.enc.encode(text)
        print(context_tokens)

        generated = 0
        response = []
        for _ in range(3 // self.batch_size):
            out = sample_sequence(
                model=self.model, length=self.length,
                context=context_tokens,
                start_token=None,
                batch_size=self.batch_size,
                temperature=0.7, top_k=40, device=self.device
            )
            out = out[:, len(context_tokens):].tolist()
            for i in range(self.batch_size):
                generated += 1
                text = self.enc.decode(out[i])
               
                print("=" * 40 + " SAMPLE " +
                        str(generated) + " " + "=" * 40)
                print(text)
                response.append(text)
        
        return response

    def get_name(self):
        return "GPT-2"
