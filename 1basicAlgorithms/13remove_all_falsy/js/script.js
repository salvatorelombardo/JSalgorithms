function bouncer(arr) {

    const newArr = [];

    for (let i = 0; i < arr.length; i++) {

        const element = arr[i];
        // console.log(element)


        // console.log(arr[i], isFinite(arr[i]))
        if (!isFinite(element) && typeof element !== 'string' && typeof element !== 'undefined') {
            continue
        } else {

            switch (element) {


                case false:
                    break;
                case null:
                    break;
                case 0:
                    break;
                case "":
                    break;
                case undefined:
                    break;
                default:
                    newArr.push(element);


            }
        }



    }

    console.log(newArr)
    return newArr
    // console.log(newArr)




}

bouncer([7, "ate", "", false, 9]);
bouncer(["a", "b", "c"]);
bouncer([false, null, 0, NaN, undefined, ""]);
bouncer([1, null, NaN, 2, undefined]);