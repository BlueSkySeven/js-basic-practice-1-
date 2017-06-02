// Write your cade below:
function caclRemaindar(a, b ) {
    return a%b;
};

function caclSum(numArray1) {
    var sum=0;
    for(var i=0;i<numArray1.length;i++)
    {
        sum = sum + numArray1[i];
    }
    return sum;
};

function caclSumInConditon(numArray1, n) {
    var num=0;
    for(var i=0;i<numArray1.length;i++)
    {
        if(numArray1[i] <n)
        {
            num+= numArray1[i];
        }
    }
    return num;
};

module.exports = {
    caclRemaindar,
    caclSum,
    caclSumInConditon
}