from scipy import stats
import numpy as np

from matplotlib import pyplot as plt

x = np.array([112, 345, 198, 305, 372, 550, 302, 420, 578])

y = np.array([1087, 2349, 1400, 1789, 2046, 4006, 2089, 2654, 5639 ])

slope, intercept, r_value, p_value, std_err = stats.linregress(x,y)

plt.plot(x,y,'ro',color="black")

plt.ylabel("Price")
plt.xlabel("Size of House")

plt.axis([0,600,0,8000])

plt.plot(x, x*slope+intercept, "b")

plt.plot()
plt.show()


# PREDICITONS

newX = 150
newY = newX*slope+intercept

print(newY)
