import csv
import json
from operator import attrgetter
class Student:
    def __init__(self, sid, name,location,skills, interests, mentor):
        self.sid =sid
        self.name = name
        self.location = location
        self.skills = skills
        self.interests = interests
        self.mentor = mentor

class Mentor:
    def __init__(self, sid, name, score):
        self.sid =sid
        self.score = score
        self.name = name

def findStudent(ref, studentFile):
    # retrieve student info
    with open(studentFile) as s_csv_file:
        csv_reader = csv.reader(s_csv_file, delimiter=',')
        # get the row with the student info
        rows = list(csv_reader)
        student_info = rows[ref]
        location = student_info[10]
        skills = student_info[12].lower() + student_info[13].lower()
        interests = student_info[18].lower()
        mentor = student_info[7].lower()
        # print(interests)
        # fill out the student struct
        name = student_info[2]
        student = Student(ref, name, location, skills, interests,mentor)
        return student

def checkSkills(c,row, student, mentorList):
    print("checking skills for " + str(c))
    score = 0
    skills = row[29].split(";") + row[30].split(";") #ad ae
    print(skills)
    for s in skills:
        if(s.lower() in student.skills):
            print(s +" is in students skills: " + student.skills)
            score += 1
            print("adding 1 for SKILLS")
    hobbies = row[23].split(";") #x
    for h in hobbies:
        if(h.lower() in student.interests):
            score +=1
            print("adding 1 for HOBBY")
    mentor = Mentor(c,row[1],score)
    mentorList.append(mentor)
    return mentorList

def findMentor(student, mentorFile):
    with open(mentorFile) as m_csv_file:
        csv_reader = csv.reader(m_csv_file, delimiter=',')
        rows = list(csv_reader)
        c = 0
        mentorList = list()
        for row in rows:
            c +=1 #row number
            locations = row[24].split(";") #y
            if (student.location in locations): # the location is neccesary
                mentorList = checkSkills(c,row, student, mentorList) # scoring based on hobbies and skills

        if(len(mentorList) == 0):
            return None
        else:
            # sort list of mentors
            # return the list on row numbers
            mentorList.sort(key=attrgetter('score'), reverse = True)
            mentorIds = list()
            for i in range(0,5):
                mentorIds.append(mentorList[i].sid)
                print(mentorList[i].score)
            # print(mentorIds)
            return mentorIds
            # return mentorList[0:5]



def findLine(id, studentDB):
    with open(studentDB,'r') as f:
        csv_reader = csv.reader(f, delimiter=',')
        rows = list(csv_reader)
        c = 0
        for row in rows:
            c +=1
            if(id in row[0]):
                return c-1

def createEntry(studentDBc, newStudent):
    with open(studentDBc, "a") as f:
        with open(newStudent,"r") as s:
            csv_reader = csv.reader(s, delimiter=',')
            rows = list(csv_reader)
            writer = csv.writer(f, delimiter=',')
            line = rows[1]
            writer.writerow(rows[1])

# def createMentors(lines, mentorDB):
#     with open(mentorDB) as f:
#         mentors = list()
#         csv_reader = csv.reader(f, delimiter=',')
#         rows = list(csv_reader)
#         c = 0
#         for row in rows:
#             c += 1
#             if(c in lines):

#                 str = row[2] + row[3] + row[24]  + row[29]+row[30]
#                 mentors.append(str)
#         return mentors
def createMentors(lines, mentorDB):
    with open(mentorDB) as f:
        
        # mentors = list()
        csv_reader = csv.reader(f, delimiter=',')
        rows = list(csv_reader)
        c = 0
        data = {}
        data['mentors'] = []
        for row in rows:
            c += 1
            if(c in lines):
                data['mentors'].append({
                'name': row[2] + row[3],
                'location': row[24],
                'skills': row[29]+row[30]
                })
                # print(data)
                
        with open('Suggestions.text','w') as outfile:
            json.dump(data, outfile)    
                # str = row[2] + row[3] + row[24]  + row[29]+row[30]
                # mentors.append(str)
        return mentors


# def getRecentID(studentFile):
#
#     with open(studentFile,'r') as f:
#         csv_reader = csv.reader(f, delimiter=',')
#         rows = list(csv_reader)
#         last = len(rows)-1
#         print (last)
#         id = last[0]
#     return id


# driver code

def createCsvMen(mentors, newFile):
    with open(newFile,'w+') as f:
        #writer = csv.writer(f, delimiter=',')
        for m in mentors:
            print(m)
            #writer.writerow(m)
            f.write(m)

mentorFile = "data.csv" #mentor data
studentFile = "mentees.csv" #student data
newStudent = "newStudent.csv" # this is the file that comes from front end with the single new student
copyData = "mentees-Copy.csv"
newFile = "Suggestions.csv"

createEntry(studentFile, newStudent) # updates the database

# studentRef = 2
# studentRef = getRecentID(studentFile)

studentRef = findLine("a3", studentFile) #for now hardcode the last passsed id
# print(studentRef)
# some student reference to the database
# createNewEntry(newStudent, copyData)
student = findStudent(studentRef,studentFile)

if(student.mentor =="yes"):#if return 1 if student needs mentor
    print("My name is "+student.name+" my skills are " +student.skills+" I need a mentor!!!!")
    recMentorsNums = findMentor(student, mentorFile)
    # print(recMentors)
    if (recMentorsNums):
        recMentors = createMentors(recMentorsNums,mentorFile)
        createCsvMen(recMentors,newFile)
        for m in recMentors:
            print(m)
            print(len(recMentors))








