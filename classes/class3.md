[back](../README.md)
# CSS (Cascading Style Sheet)
### 2 types of styling elements in css:
1. Inline style
2. Externl style
### Inline Style:
We use inline style when we want to style a specific element, we use it inside the open tag of an element using the following syntax:
**< selector style="proporty:value">**
**Example:**
< p style="color:red >hi< /p >
the color of hi will be **Red**, also this syntax effects **only the h1 that has the color proporty inside**
# External Style:
We use external style when we want to style a set of elements not just one, we used it inside a style tag using the following syntax:
**< head >
        < style >
            selector{
                proporty:value;
            }
            < /style>
< head >**
**Example:**
< head>
< style>
h1{
    font-size:28px;
    color:red;
}
the text inside h1 will be in size **28px** and the color of it will be **red**, also this syntax effects **every h1 elemant in the page**
# Classes VS IDs
### Classes:
we use classes when we want to style a set of element like we want p element and h1 element to be in red with font size 28px
**Example:**
< head>
< style>
.RedFont{
    color:red;
    font-size:28px;
}
< p class="RedFont">wow </ p>
< h1 class="RedFont">wow </ h1>
the **dot** means that now we are dealing with a class selector not and element selector.
**the style will applied to every selector has the RedFont class**
### ID:
we use id when we want only one element to has a specific style like all h1 elements to be in a red color except one we want it to be in a white color.
id is something unique, it is not allowed to use it with othert elements (this will be 
discussed more in JS part)
**Example:** 
< head>
< style>
h1{
    color:red;
}
#WhiteHi{
    color:white
}
< h1>hi</ h1>
< h1>hi2< h1>
< h1>hi3</ h1>
< h1 id=WhiteHi>wow</ h1>
the **#** means we are dealing with an id selector not with an element selector.
all h1 elements will be in red color excpt the last one will be in white color