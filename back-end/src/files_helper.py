import os
import shutil
import pandas as pd

from tensorflow.keras.preprocessing.image import ImageDataGenerator
from tensorflow.keras.preprocessing import image


def create_temp_dir():
    os.makedirs('temp', exist_ok=True)


def delete_temp_dir():
    shutil.rmtree('temp')


def get_img(img_path):
    img = image.load_img(img_path, target_size=(224, 224))

    img_array = image.img_to_array(img)
    img_array = img_array.reshape((1,) + img_array.shape)

    img_gen = ImageDataGenerator(rescale=1. / 255)
    img_generator = img_gen.flow(img_array, batch_size=1)

    return img_generator


def get_blood_data(file_path):
    return pd.read_excel(file_path)