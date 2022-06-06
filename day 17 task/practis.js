let timeout = 1000;
setTimeout(() => {
    document.querySelector("h3").innerHTML =10;
    setTimeout(() => {
        document.querySelector("h3").innerHTML =9;
        setTimeout(() => {
            document.querySelector("h3").innerHTML =8;
            setTimeout(() => {
                document.querySelector("h3").innerHTML =7;
                setTimeout(() => {
                    document.querySelector("h3").innerHTML =6;
                    setTimeout(() => {
                        document.querySelector("h3").innerHTML =5;
                        setTimeout(() => {
                            document.querySelector("h3").innerHTML =4;
                            setTimeout(() => {
                                document.querySelector("h3").innerHTML =3;
                                setTimeout(() => {
                                    document.querySelector("h3").innerHTML =2;
                                    setTimeout(() => {
                                        document.querySelector("h3").innerHTML =1;
                                        setTimeout(() => {
                                            document.querySelector("h3").innerHTML ="Happy Independance Day";
                                        }, timeout);
                                    }, timeout);
                                }, timeout);
                            }, timeout);
                        }, timeout);
                    }, timeout);
                }, timeout);
            }, timeout);
        }, timeout);
    }, timeout);
}, timeout);