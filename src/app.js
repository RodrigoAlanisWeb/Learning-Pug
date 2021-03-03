import express from 'express'
import morgan from 'morgan'
import path from 'path'
import prisma from './db'

const app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'static')));
app.use(express.urlencoded({extended: false}))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.get('/',async (req, res) => {
    try {
        const products = await prisma.product.findMany()
        res.render('index',{data: products})
    } catch (error) {
        console.log(error);
    }
})

app.post('/create', async (req, res) => {
    try {
        const product = await prisma.product.create({
            data: {
                name: req.body.name,
                count: parseInt(req.body.count)
            }
        })

        return res.redirect('/');
    } catch (error) {
        console.log(error);
        return res.redirect('/');
    }
})

app.get('/delete/:id',async (req,res) => {
    try {
        const product = await prisma.product.delete({
            where: {
                id: parseInt(req.params.id)
            }
        })

        return res.redirect('/');
    } catch (error) {
        console.log(error);
        return res.redirect('/');
    }
})

app.get('/update/:id', async (req,res) => {
    try {
        const id = parseInt(req.params.id)
        console.log(id);
        const product = await prisma.product.findFirst({
            where: {
                id: parseInt(req.params.id)
            }
        })
        res.render('update',{data: product,id: req.params.id})
    } catch (error) {
        console.log(error);
    }
})

app.post('/save/:id', async (req,res) => {
    try {
        const product = await prisma.product.update({
            data: {
                name: req.body.name,
                count: parseInt(req.body.count)
            },
            where: {
                id: parseInt(req.params.id)
            }
        })

        return res.redirect('/');
    } catch (error) {
        console.log(error);
        return res.redirect('/');
    }
})

app.listen(4000, (req, res) => {
    console.log('Listening At Port 4000');
})