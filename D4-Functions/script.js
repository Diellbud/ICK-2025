//krijo nje function register,
//functioni ka 3 params (firstName and LastName,Password)
//a) shfaq nje error nese nuk plotsohet njera nga params
//b) nese plotesohen shfaq nje mesazh me sukses
//c) te behet validimi i firstname,lastname,password
//d) validimet: firstname dhe lastname me shume se 4 shkronja
// dhe mos te kete ndonje number
//e) passworrdi duhet te kete se paku 8 karaktere, dhe te mos kete vetem shkronja
let notAllowedChars = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    " ",
    "*",
    "%",
    "^",
    "$",
    "#",
    "@",
    "!",
  ];
  function stringCheck(stringValue) {
    let num = 0;
    if (stringValue.length < 4) {
      console.warn(
        'Validation of "' +
          stringValue +
          '" failed. It must be at least 4 characters long.'
      );
      return false;
    }
    notAllowedChars.forEach((char) => {
      if (stringValue.includes(char)) {
      } else {
        num = num + 1;
      }
    });
    if (num == notAllowedChars.length) {
      return true;
    } else {
      console.warn(
        'String Check of "' +
          stringValue +
          '" failed. It contains invalid characters.'
      );
      return false;
    }
  }
  let num = 0;
  function passCheck(password) {
    if (password.length < 8) {
      return false;
    }
    notAllowedChars.forEach((char) => {
      if (password.includes(char)) {
        num = num + 1;
      }
    });
    if (num >= 1) {
      return true;
    } else {
      console.warn(
        "PassCheck failed. It must contain at least one number or special character."
      );
      return false;
    }
  }
  
  const register = (name, lastName, password) => {
    if (!name || !lastName || !password) {
      console.warn("information not entered");
    } else {
      console.log("success");
      if (stringCheck(name) && stringCheck(lastName) && passCheck(password)) {
        console.log("Access granted");
      }
    }
  };
  register("Diell", "Budima", "password1");
  