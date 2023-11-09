import os

'''list_of_folders = ["08-create-item-innerHTML-vs-createElement",
    "09-refactor-to-multiple-functions",
    "10-insert-elements", "11-custom-insertafter-challenge",
    "12-replacing-elements", "13-remove-elements", "14-styles-classes"]'''


# for folder in os.listdir('C:\\Users\\ENVY_02142019\\Documents\\HTML_CSS_JS\\Modern_JS_Traversy\\DOM_Manipulation'):
#     if os.path.isdir(folder):
#         filepath = os.path.join(os.getcwd(), folder)
#         l2 = os.listdir(filepath)
#         for i in list_of_folders:
#             if i not in l2:
#                 os.mkdir(os.path.join(filepath, i))

current_dir = os.getcwd()
print(current_dir)

# for dirfile in os.listdir(current_dir):
#     # if dirfile is a folder check its content 
#     if os.path.isfile(dirfile):
#         continue

#     lfolders = os.listdir(dirfile)
#     # folder "i" empty 
#     if lfolders == []:
#         for dirtomake in list_of_folders:
#             os.makedirs(os.path.join(os.path.abspath(dirfile), dirtomake))
#         continue

#     for folder in lfolders:
#         for dirtomake in list_of_folders:
#             if dirtomake not in lfolders:
#                 os.makedirs(os.path.join(os.path.abspath(dirfile), dirtomake))

