import os
map=input("Enter the image name before [www.imagesplitter.net] (Without the space): ")
for x in range(0,8):
    for y in range(0,8):
        oldName = (str(map)+" [www.imagesplitter.net]-"+str(x)+"-"+str(y)+".png")
        newName = (str(x)+str(y)+".png")
        os.rename(oldName, newName)
