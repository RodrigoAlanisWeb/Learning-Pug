# Learning Pug | Product App
## Product app with **nodejs** and **pug**

<img src="./pug.png" alt="pug" width="250" height="250">

---

<br>

## Tecnologies

<br>

* Server
    * Nodejs
    * Morgan
* Templates
    * Pug
* Styles 
    * Bootswatch Cosmo Theme
* Database
    * Prisma orm
    * Postgresql database
* Compiler
    * Babel

<br>
----
<br>

# Pug Syntax

## Basic Pug Structure

```pug
doctype html
html(lang="en")
    head
        meta(charset="UTF-8")
        meta(http-equiv="X-UA-Compatible", content="IE=edge")
        meta(name="viewport", content="width=device-width, initial-scale=1.0")
        title Document
    body 
```

## H1 In Pug

```pug
h1 Text
```

## Subelements

```pug
ul //- enter a tab
    li Item 1
    li Item 2
    li Item 3
```

## Atributes

```pug
form
    //- Clases
    div.mb_3 
        //- Atributes
        input.form-ciontrol(type="text") 
    div.mb_3 
        //- More Atributes
        input.form-ciontrol(type="text" placeholder="Name") 

```

## Variables And Binding

```pug
- let name = "Buddy"
h1 Hi #{ name } //- Binding
h1= `Hi ${name}` //- Second Binding Type
```

## If Statement

```pug
- let verify = true
//- Only use a tab for the content of the conditional
if verify
    h1 True
else 
    h2 False
else if verify == null
    h3 Null 
```

## Foreach Loop

```pug
- let numbers = [1,2,3,4,5]

ul
each num in numbers
    li= num
//- the else is activated if the array is empty
else 
    li The Array Is Empty

each num,index in numbers
    li #{ index } : #{ num }
else 
    li The Array Is Empty
```

## While Loop

```pug
- let count = 0

ul
    while count < 10
        li= count++
```

## Blocks And Extends

```pug
doctype html
html(lang="en")
    head
        meta(charset="UTF-8")
        meta(http-equiv="X-UA-Compatible", content="IE=edge")
        meta(name="viewport", content="width=device-width, initial-scale=1.0")
        title Document
    body
    div.main
        block main 
```

```pug
extends ./template
block main
    h2 Main Block
```

## Thats The Pug Basics Thanks For Reading

## For More Info:

[Pug Docs Page](https://pugjs.org/api/getting-started.html)

[Git Hub Profile](https://github.com/RodrigoAlanisWeb)
