// Just to add some js for the Homepage CS50 problem set sake - to be deleted
let emtags;

window.onload = getEmTags;

function getEmTags()
{
  emtags = document.getElementsByTagName('em');

  for (const emtag of emtags) {
    emtag.addEventListener("mouseover", (event) => {
        bolder();
    });

    emtag.addEventListener("mouseleave", (event) => {
        reverseBold();
    });
    }
}

function bolder()
{
   for (var i=0; i < emtags.length; i++)
    {
        console.log(emtags[i].style.fontWeight);
        emtags[i].style.fontWeight = '900';
    }
}

function reverseBold()
{
  for (var i=0; i < emtags.length; i++)
    {
        emtags[i].style.fontWeight = '400';
    }
}