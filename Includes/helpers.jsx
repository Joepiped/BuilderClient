//Helper functions and stuff
//Everythign here needs clear comments


function RemoveLastDirectoryPartOf(the_url)//Removes the last diectory of a URL
{
    var the_arr = the_url.split('/');
    the_arr.pop();
    return( the_arr.join('/') );
}