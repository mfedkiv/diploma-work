from joblib import load


class DecisionTree:
    def __init__(self):
        self.model = self.load_model()

    @staticmethod
    def load_model():
        return load('src/weights/decision-tree.joblib')

    def predict(self, x):
        return self.model.predict(x)
