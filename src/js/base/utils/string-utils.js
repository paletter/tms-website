/**
 * Creator:     Jeng Tam
 * CreateDate:  2013/5/23
 * Description: 字符串常用函数
 */
define(function () {
    window.StringUtils = {
        /**
         * 自动生成36位UUID
         * @returns {string}
         */
        getUUID : function(){
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {var r = Math.random()*16|0,v=c=='x'?r:r&0x3|0x8;return v.toString(16);});
        },
        /**
         * 首字母小写
         * @param str
         * @returns {string}
         */
        firstLowerCase : function(str){
            return str.substring(0,1).toLowerCase()+str.substring(1,str.length);
        },
        /**
         * 首字母大写
         * @param str
         * @returns {string}
         */
        firstUpperCase : function(str){
            return str.substring(0,1).toUpperCase()+str.substring(1,str.length);
        },
        /**
         * 是否为空对象
         * @param obj
         */
        isEmpty : function(obj){
            for(var i in obj)
                return false;
            return true;
        },
        /**
         * 是否空
         * 1.==undefined
         * 2.==''
         * 4.==null
         * 5.空数组
         * @param value
         * @returns {boolean}
         */
        isBlank : function(str){
            if(str == undefined || str == "" || str === "" || str == null || str === null || str.length<1){
                return true;
            }else{
                return false;
            }
        },
        /**
         * Trim左侧函数
         * @param str
         * @returns {*|XML|string|void}
         */
        leftTrim : function(str){
            return str.replace(/(^[\s]*)/,"");
        },
        /**
         * Trim右侧函数
         * @param str
         * @returns {*|XML|string|void}
         */
        rightTrim : function(str){
            return str.replace(/(\s*$)/g,"");
        },
        /**
         * trim所有函数
         * @param valuet
         * @returns {*|XML|string|void}
         */
        allTrim : function(str){
            return str.replace(/\s+/g,"");
        },
        replaceUnder:function(srcStr,org,ob){
            var newString = "";
            var first = 0;
            while (srcStr.indexOf(org) != -1) {
                first = srcStr.indexOf(org);
                if (first != srcStr.length) {
                    newString = newString + srcStr.substring(0, first) + ob;
                    srcStr = srcStr.substring(first + org.length,srcStr.length);
                    srcStr = this.firstUpperCase(srcStr);
                }
            }
            newString = newString + srcStr;
            return this.firstUpperCase(newString);
        },
        json2FormData : function(obj){
            var str = [];
            for(var p in obj){
                str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
            }
            return str.join('&');
        }
    };
    return window.StringUtils;
});