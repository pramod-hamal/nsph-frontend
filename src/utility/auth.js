const auth = function (user) {
    if(!user){
        return null;
    }

  const isUserAllowed = (task = "None") => {
    if (task == "All") {
      return true;
    }
    if(task == "None"){
        return false;
    }
    if(!user.permission){
        return false;
    }
    let permissions = (user && user.permission) || [];
    permissions = permissions.map((p) => p.name);

    //adding user role permissions in permissions array
    if (user.roles && user.roles.length > 0) {
      user.roles.forEach((role) => {
        if (role.permission && role.permission.length > 0) {
          role.permission.forEach((per) => {
            if (permissions.indexOf(per.name) < 0) {
              permissions.push(per.name);
            }
          });
        }
      });
    }
    //checking if task is array
    if (Array.isArray(task)) {
      for (let i = 0; i < task.length; i++) {
        let curTask = task[i];
        if (permissions.indexOf(curTask) < 0) {
          return false;
        }
      }
    } else {
      if (permissions.indexOf(task) < 0) {
        return false;
      }
    }
    return true;
  };

  const isRole = (role="None") => {
    if(!user.roles){
        return false;
    }
    if(role == "None"){
        return false;
    }
    if (role == "All") {
      return true;
    }
    let roles = (user && user.roles) || [];
    roles = roles.map((r) => r.name);
    //checking if task is array
    if (Array.isArray(role)) {
      for (let i = 0; i < role.length; i++) {
        let curRole = role[i];
        if (roles.indexOf(curRole) < 0) {
          return false;
        }
      }
    } else {
      if (roles.indexOf(role) < 0) {
        return false;
      }
    }
    return true;
  };

  return {
    isRole,
    isUserAllowed,
  };
};

export default auth;
