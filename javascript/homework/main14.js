function iWakeUp(yesOrNo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (yesOrNo) {
                resolve ('I live');
            }else {
                reject ('I am tired')
            }
        }, 500)
    });
}

function morningToilet(everythingIsGood) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (everythingIsGood) {
                resolve ('Yes, everything is OK');
            }else {
                reject ('No water')
            }
        }, 250)
    });
}

function wayToWork(iHaveTime) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (iHaveTime) {
                resolve ('Yes, without delay')
            }else {
                reject ('No, traffic jams')
            }
        }, 600)
    });
}

function work(goodDay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (goodDay) {
                resolve ('I made money')
            }else {
                reject ('No money - I am walking')
            }
        }, 0)
    });
}

function theWayHome(iAmHungry) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (iAmHungry) {
                resolve ('We will sing soon')
            } else {
                reject ('No money - no food')
            }
        }, 750)
    });
}

function dinner(dinnerReady) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (dinnerReady) {
                resolve ('I sit down to eat')
            } else reject ('I am very dissatisfied')
        }, 50)
    });
}

function iGoToBed(sleep) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (sleep) {
                resolve ('I rest')
            } else {
                reject('in the morning I will be angry')
            }
        }, 2000)
    });
}


// iWakeUp(true)
// .then((value) => {
//     console.log('Good')
//     return morningToilet(value)
// })
//     .then((afterSleep) => {
//         console.log('I feel good')
//         return wayToWork(afterSleep)
//     })
//     .then((afterToilet) => {
//         console.log('I am on time')
//         return theWayHome(afterToilet)
//     })
//     .then((afterWay) => {
//         console.log('There is money, no problems')
//         return theWayHome(afterWay)
//     })
//     .then((afterWork) => {
//         console.log('I\'ll be home soon')
//         return dinner(afterWork)
//     })
//     .then((afterWayHome) => {
//         console.log('I am satisfied')
//         return iGoToBed(afterWayHome)
//     })
//     .then(afterDinner => {
//         console.log('See you tomorrow')
//     })
//
// .catch(reason => {
//     console.log('Oh no')
// })
// .finally(() => {
//     console.log('FINAL')
// })


async function myDay() {
    try {
        const value = await iWakeUp(true);
        console.log('Good');

        const afterSleep = await morningToilet(true);
        console.log('I feel good');

        const afterToilet = await wayToWork;
        console.log('I am on time');

        const afterWay = await work;
        console.log('There is money, no problems');

        const afterWork = await theWayHome;
        console.log('I\'ll be home soon');

        const afterWayHome = await dinner;
        console.log('I am satisfied');

        const afterDinner = await iGoToBed;
        console.log('See you tomorrow');
    } catch (e) {
        console.warn('oh no!')
    }
}

myDay()




























