

class Predictor:
    def __init__(self):
        raise NotImplementedError

    def predict(self, text, cursor):
        raise NotImplementedError

    def get_name(self):
        raise NotImplementedError


from .markov import MarkovPredictor

ACTIVE_PREDICTORS = [MarkovPredictor]

class PredictorManager:
    def __init__(self):
        self.predictors = {}
        for predictor in ACTIVE_PREDICTORS:
            predictor_obj = predictor()
            self.predictors[predictor_obj.get_name()] = predictor_obj

    def get_predictors_list(self):
        return list(self.predictors.keys())

    def get_predictor(self, name):
        return self.predictors.get(name)

__all__ = ['Predictor', 'PredictorManager']

