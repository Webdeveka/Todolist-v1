    exports.getDate =  function () {
    
    const today = new Date();
    const options = {
        weekday: "long",
        year: 'numeric',
        day: "numeric",
        month: "numeric"
    };
    return today.toLocaleDateString("en-GB", options);
};


exports.getDay =  function () {
    
    const today = new Date();
    const options = {
        weekday: "long"
    };

    return today.toLocaleDateString("en-GB", options);

};