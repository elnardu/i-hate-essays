from .markov import MarkovPredictor

m = MarkovPredictor()
print(m.model.make_sentence())

print(m.predict("instance for this text, if pre-processed", {
    'line': 0,
    'ch': 22
}))