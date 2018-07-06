import os
for x in range(0,8):
    for y in range(0,8):
        oldName = ("Cyberiad [www.imagesplitter.net]-"+str(x)+"-"+str(y)+".png")
        newName = (str(x)+str(y)+".png")
        os.rename(oldName, newName)
