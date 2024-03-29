/**
 * Created with JetBrains WebStorm.
 * User: lam
 * Date: 12-11-4
 * Time: 下午2:09
 * To change this template use File | Settings | File Templates.
 */
module.exports = {
  mongodb:{
    host:'localhost',
    port:27017,
    databaseName:'mydb',
    //autoReconnect: automatically reconnect if connection is lost
    autoReconnect:true,
    logCount: 1,
    backUp: 1,
    //10 Seconds
    timeOut:10000,
    //poolSize: size of connection pool (number of connections to use)
    poolSize:4,
    //set admin to true if you want to turn on admin features
    //if admin is true, the auth list below will be ignored
    //if admin is true, you will need to enter an admin username/password below (if it is needed)
    admin:false,
    // >>>>  If you are using regular accounts, fill out auth details in the section below
    // >>>>  If you have admin auth, leave this section empty and skip to the next section
    auth:[
      /*
       * Add the the name, the username, and the password of the databases you want to connect to
       * Add as many databases as you want!
       */
      {
        //database:'mydb'
        //username: 'user',
        //password: 'pass'
      }

    ],
    //  >>>>  If you are using an admin mongodb account, or no admin account exists, fill out section below
    //  >>>>  Using an admin account allows you to view and edit all databases, and view stats

    //leave username and password empty if no admin account exists
    //adminUsername:'admin',
    //adminPassword:'pass',
    //whitelist: hide all databases except the ones in this list  (empty list for no whitelist)
    whitelist:[],
    //blacklist: hide databases listed in the blacklist (empty list for no blacklist)
    blacklist:[]
  },
  site:{
    //baseUrl: the URL that mongo express will be located at
    //Remember to add the forward slash at the end!
    baseUrl:'http://localhost:3000/',
    port:3000,
    viewEngine:'jade',
    cookieSecret:'cookiesecret',
    sessionSecret:'sessionsecret'
  },
  options:{
    //documentsPerPage: how many documents you want to see at once in collection view
    documentsPerPage:10,
    //editorTheme: Name of the theme you want to use for displaying documents
    //See http://codemirror.net/demo/theme.html for all examples
    editorTheme:"rubyblue",

    //The options below aren't being used yet

    //cmdType: the type of command line you want mongo express to run
    //values: eval, subprocess
    //  eval - uses db.eval. commands block, so only use this if you have to
    //  subprocess - spawns a mongo command line as a subprocess and pipes output to mongo express
    cmdType:'eval',
    //subprocessTimeout: number of seconds of non-interaction before a subprocess is shut down
    subprocessTimeout:300
  }
};