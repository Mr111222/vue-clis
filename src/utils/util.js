
export const trimFn = () => {
  const reg = /\s+/g
  const result = str.replace(reg, "")
  return result
}

export const emailFunc = str => {
  const email = trim(str)
  const regEmail =  /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/g
  const bool = regEmail.test(email)
  if(bool) {
    return true
  } else {
    return {
      errMsg: '请输入正确的邮箱!'
    }
  }
}

//校验ip地址
export const validcodeip = (rule, value, callback) => {
  const reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
  if (value) {
    let str = value.split(',');
    let flag = true;
    for (let i = 0; i < str.length; i ++) {
      if (!reg.test(str[i])) {
        flag = false;
        break;
      }
    }
    if (flag) {
      callback();
    } else {
        return callback(new Error('输入格式IP不正确！'));
    }
  } else {
    callback(new Error("请输入应用IP地址"));
  }
};

export const phoneFunc = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("请输入手机号"));
  } else {
    if (!/^1[3-9]\d{9}$/.test(value)) {
      callback(new Error("请输入正确的手机号"));
    } else {
      callback();
    }
  }
};

export const passwordFunc = str => {
  const pwd = trim(str)
  const regPwd = /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_!@#$%^&*`~()-+=]+$)(?![a-z0-9]+$)(?![a-z\W_!@#$%^&*`~()-+=]+$)(?![0-9\W_!@#$%^&*`~()-+=]+$)[a-zA-Z0-9\W_!@#$%^&*`~()-+=]{8,20}$/g
  const bool = regPwd.test(pwd)
  if(bool) {
    return true
  } else {
    return {
      errMsg: '请输入正确的密码!'
    }
  }
}


export const isArray = (obj) => {
  return Object.prototype.toString.call(obj) === '[object Array]';
};
export const isObject = (obj) => {
  return Object.prototype.toString.call(obj) === '[object Object]';
};
export const isNumber = (obj) => {
  return Object.prototype.toString.call(obj) === '[object Number]';
};
export const isString = (obj) => {
  return Object.prototype.toString.call(obj) === '[object String]';
};
export const isFunction = (obj) => {
  return Object.prototype.toString.call(obj) === '[object Function]';
};
export const isBoolean = (obj) => {
  return Object.prototype.toString.call(obj) === '[object Boolean]';
};
export const isDate = (obj) => {
  return Object.prototype.toString.call(obj) === '[object Date]';
};
export const formatUnitSize = (size, units, formatter) => {
  var bean = {};
  var formatList = [];
  if (isNumber(formatter)) {
    formatList.push(1);
    for (var i = 1; i < units.length; i++) {
      formatList.push(formatter);
    }
  } else if (isArray(formatter)) {
    for (var i = 0; i < units.length; i++) {
      if (i < formatter.length) {
        formatList.push(parseFloat(formatter[i]));
      } else {
        formatList.push(parseFloat(formatter[formatter.length - 1]));
      }
    }
  } else if (isString(formatter)) {
    formatList.push(1);
    for (var i = 1; i < units.length; i++) {
      formatList.push(parseFloat(formatter));
    }
  }
  if (size > 0 && formatList.length) {
    var max = 1;
      for (var i = 0; i < units.length; i++) {
        var format = formatList[i];
        if (i == 0) {
          format = 1;
        }
        max *= format;
          var s = size / max;
          bean.size = s;
          bean.unit = units[i];
          if (i + 1 >= formatList.length || (s > 0.9 && s <= formatList[i + 1] * 0.9)) {
              break;
          }
      }
  } else {
      bean.size = size;
      bean.unit = units[0];
  }
  return bean;
}
export const formatDocSize = (size) => {
  return formatUnitSize(size, ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB", "BB", "NB", "DB"], 1024);
};
export const formatDistance = (size) => {
  return formatUnitSize(size, ["M", "KM"], 1000);
};
export const formatArea = (size) => {
  return formatUnitSize(size, ["M²", "KM²"], 1000000);
};
export const formatTime = (size) => {
  return formatUnitSize(size, ["毫秒", "秒", "分", "小时", "天", "月", "年"], [1, 1000, 60, 60, 24, 30, 12]);
};

export const storage = {
    set: (n,c) => {
        localStorage.setItem(n, JSON.stringify(c));
    },
    get: (n) => {
        if(localStorage.getItem(n) === null){
            return null;
        }else{
            return JSON.parse(localStorage.getItem(n));
        }
    },
    remove: (n) => {
        localStorage.removeItem(n);
    }
}

