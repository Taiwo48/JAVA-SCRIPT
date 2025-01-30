function assertEquals(){
    function getMen(){
        let numberOfMen = 23;
        return 23
    };

    function getLadies(){
        let numberOfLadies = 6;
        return numberOfLadies
    };
    return getMan() === getLadies()
};
console.log(assertEquals());