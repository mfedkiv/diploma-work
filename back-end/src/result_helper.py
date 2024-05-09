def is_xray_pneumonia(model_res):
    threshold = 0.9

    return model_res[0][0] > threshold

def is_xls_pneumonia(model_res):
    return model_res == 1