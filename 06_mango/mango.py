# HeadPhoneJacks Cause Vaccines
# Softdev2 pd8
# K#06: Yummy Mango Py
#2019-02-28

import pymongo

SERVER_ADDR=""
connection =pymongo.MongoClient(SERVER_ADDR)
db = connection.test
collection = db.restaurants

def boro_find(borough):
    '''
    finds restaurants by borough and returns them in a list.
    '''
    restuarants = collection.find({'borough':borough})
    return [restuarant for restuarant in restuarants]

def zip_find(zip):
    '''
    finds restaurants by zip and returns them in a list.
    '''
    zip = str(zip)
    restuarants = collection.find({'address.zipcode':zip})
    return [restuarant for restuarant in restuarants]

def zip_grade_find(zip, grade):
    '''
    finds restaurants by zip and grade and returns them in a list.
    '''
    zip = str(zip)
    restuarants = collection.find(
        {'$and':[
            {'address.zipcode':zip},
            {'grades.0.grade':grade},
            ]
        }
    )
    return [restuarant for restuarant in restuarants]

def zip_score_find(zip, score):
    '''
    finds restaurants by zip and less than the given score and returns them in a list.
    '''
    zip = str(zip)
    restuarants = collection.find(
        {'$and':[
            {'address.zipcode':zip},
            {'grades.0.score':{'$lt':score}}, #nums are scores
            ]
        }
    )
    return [restuarant for restuarant in restuarants]

def cuisine_score_boro_find(cuisine, score, borough):
    '''
    finds restaurants by cuisine, and greater than the given score, and borough and returns them in a list.
    '''
    restuarants = collection.find(
        {'$and':[
            {'cuisine':cuisine},
            {'grades.0.score':{'$gt':score}}, #nums are scores
            {'borough': borough},
            ]
        }
    )
    return [restuarant for restuarant in restuarants]


if __name__ == '__main__':
    print('Printing borough...')
    print(boro_find('Bronx'))
    print('Printing zip....')
    print(zip_find(11104))
    print('Printing borough and zip...')
    print(zip_grade_find(11104, 'A'))
    print('Printing zip and score...')
    print(zip_score_find(11104, 200))
    print('Printing cuisine, score, and borough...')
    print(cuisine_score_boro_find('Chinese', 40, 'Manhattan'))
