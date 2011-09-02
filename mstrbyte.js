/*
 * get bytecount from multibyte string
 * Author: Tatsuya Yamamoto
 */
(function(){
if ( String.prototype.mstrbyte ) {
    String.prototype.mstrbyte = function(){
	var s = encodeURI(this);
	var m = s.match(/%/g);
	return m ? (s.length-m.length*2) : s.length;
    };
}})();
