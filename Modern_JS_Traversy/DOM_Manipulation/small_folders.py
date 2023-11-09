import os

small_folders = ['folder100','folder101']

current_dir = os.getcwd()
print(current_dir)

# for dirfile in os.listdir(current_dir):
#     # if dirfile is a folder check its content 
#     if os.path.isfile(dirfile):
#         continue

#     lfolders = os.listdir(dirfile)
#     # folder "i" empty 
#     if lfolders == []:
#         for dirtomake in small_folders:
#             os.makedirs(os.path.join(os.path.abspath(dirfile), dirtomake))
#         continue

#     for folder in lfolders:
#         for dirtomake in small_folders:
#             if dirtomake not in lfolders:
#                 os.makedirs(os.path.join(os.path.abspath(dirfile), dirtomake))
