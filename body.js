/*
 * Author: Tatsuya Yamamoto
 */
(function(){
  if ( String.prototype.mstrbyte ) return;
  String.prototype.mstrbyte = function(){
  var s = encodeURI(this);
  return (s.length-s.match(/%/g).length*2);
}})();
