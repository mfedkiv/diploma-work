from tensorflow.keras.models import load_model


class XrayModel:
    def __init__(self):
        self.model = self.load_model()

    @staticmethod
    def load_model():
        model = load_model('src/weights/resnet-weights.h')

        return model

    def predict(self, x):
        return self.model.predict(x)
