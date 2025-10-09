from bmi_tracker import User

def test_bmi_calculation():
    user = User("Test", 70, 1.75)
    assert round(user.bmi(), 2) == 22.86
