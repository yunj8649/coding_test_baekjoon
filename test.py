import numpy as np
from scipy.spatial import distance

a = np.array(["파","이","썬"])
b = np.array(["파","이","선"]) 
c = np.array(["파","",""]) 

print('scipy a-b=>', distance.hamming(a,b)) 
print('scipy b-c=>', distance.hamming(b,c)) 
print('scipy a-c=>', distance.hamming(a,c))