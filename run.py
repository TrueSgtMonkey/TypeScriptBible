import os as os
import json as json

def main():
    jsonDictFile = open("runconfig.json", "r")
    jsonDict: dict = json.load(jsonDictFile)
    if jsonDict.get("dirs") == None:
        print("ERROR: Cannot find \"dirs\" in config file!")
        return

    choice = 1
    while choice > 0 and choice <= len(jsonDict["dirs"]):
        choice = int(input(
            "choose which directory to run:\n" +
            "1) Adding Example\n" +
            "2) Core Types\n" +
            "0) Exit\n" +
            "Choice: "
        ))
        runNodeInDir(choice, jsonDict)

def runNodeInDir(choice: int, jsonDict: str):
    # expecting each directory to have numbers as keys
    # these represent lesson number
    checkDirDict: dict = jsonDict["dirs"]
    if checkDirDict.get(str(choice)) == None:
        return

    # changing to the correct directory
    dirDict: dict = checkDirDict[str(choice)]
    cmdDict: dict = dirDict["cmds"]
    os.chdir(dirDict["path"])

    # running the command in the directory
    print("Choose a file to run with Node JS:")
    for cmd in cmdDict:
        print(cmd + ": " + cmdDict[cmd])
    choice = input("Choice: ")
    if cmdDict.get(choice) != None:
        os.system(cmdDict[choice])

    # changing back to root directory
    for depth in range(dirDict["dirDepth"]):
        os.chdir("../")

if __name__ == "__main__":
    main()