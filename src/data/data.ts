import { AboutT, HeroT, ServiceT } from "./type";

export const heroapi : HeroT  = {
    image : "https://i.pinimg.com/564x/a8/48/e0/a848e0b4f4ac5ddf727282f223a676e1.jpg",
    big_text : 'Discover the art of makeup',
    desc : 'The text block consists of two main parts: the headline and the description. The headline communicates the websites core message or value proposition'
}

export const aboutapi : AboutT = {
    image : 'https://i.pinimg.com/564x/4e/cb/35/4ecb35a0446ce93b97e1852d19be4e21.jpg',
    title : 'Beauty Makeup & Hairstyle',
    desc : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
}

export const serviceapi : ServiceT = {
    title : 'Our Services',
    services : [
        {
            image : 'https://i.pinimg.com/564x/1a/32/b2/1a32b2a4ef0f01b3ce7f0cbf91f3d1bc.jpg',
            title : 'Bridal Makeup',
            desc : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`
        },
        {
            image : 'https://i.pinimg.com/564x/9d/f1/9c/9df19cc886f0421e54bef12e8ded54c1.jpg',
            title : 'Hair Styling',
            desc : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`
        },
        {
            image : 'https://i.pinimg.com/564x/b1/db/f1/b1dbf1d32c5d0dee8726ddc41dc843d4.jpg',
            title : 'Bachelorette party makeup',
            desc : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`
        },
        {
            image : 'https://i.pinimg.com/564x/63/5b/be/635bbef049c34c492a6b8c0bea0ca3ab.jpg',
            title : 'Skincare consultations',
            desc : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`
        },
    ]
}

export const teamapi = {
    title : "Our Team",
    team : [
        {
            image : 'https://i.pinimg.com/564x/60/ff/11/60ff1137e3370f3742e04cc644c32592.jpg',
            name : 'Lily Waggon',
            role : 'Designer',
        },
        {
            image : 'https://i.pinimg.com/736x/53/4b/bd/534bbdad5d5552d91d9d2bdf70a8933a.jpg',
            name : 'Jordan Lili',
            role : 'Fashion Product Manager',
        },
        {
            image : 'https://i.pinimg.com/564x/ad/84/df/ad84df3e582043ab9843cd6383807c22.jpg',
            name : 'Amileca Sort',
            role : 'Designer',
        },
        {
            image : 'https://i.pinimg.com/564x/60/ff/11/60ff1137e3370f3742e04cc644c32592.jpg',
            name : 'Lily Waggon',
            role : 'Designer',
        },
        {
            image : 'https://i.pinimg.com/564x/0f/7a/ba/0f7aba4c0d816cd632cafc346394a2b1.jpg',
            name : 'William',
            role : 'Hair Stylist',
        },
        {
            image : 'https://i.pinimg.com/564x/8a/de/96/8ade96589cd5a753330577fbd9bf5df6.jpg',
            name : 'James Ryan',
            role : 'Product Manager',
        },
    ]
}

export const pricing = {
    title : "Our Pricing",
    pricings : [
        {
            type : "Standard Plan",
            amount : 20000,
            features : [
                'Bridal and wedding makeup',
                'Virtual makeup services',
                'Skincare consultations',
                'Bachelorette party makeup',
                'Professional hair styling',
                'DIY workshops/makeup lessons',
            ]
        },
        {
            type : "Business Plan",
            amount : 50000,
            features : [
                'Bridal and wedding makeup',
                'Virtual makeup services',
                'Skincare consultations',
                'Bachelorette party makeup',
                'Professional hair styling',
                'DIY workshops/makeup lessons',
            ]
        },
        {
            type : "Exclusive Plan",
            amount : 100000,
            features : [
                'Bridal and wedding makeup',
                'Virtual makeup services',
                'Skincare consultations',
                'Bachelorette party makeup',
                'Professional hair styling',
                'DIY workshops/makeup lessons',
            ]
        }
    ]
}

export const gallery = {
    title : "Gallery",
    gallery : [
        {
            name : 'pic',
            image : 'https://i.pinimg.com/736x/f9/90/fd/f990fd06fc560aa8ba500cdc95b26cfb.jpg',
        },
        {
            name : 'pic',
            image : 'https://i.pinimg.com/736x/d6/84/0e/d6840e8f3248e3643f943c631f7973f4.jpg',
        },
        {
            name : 'pic',
            image : 'https://i.pinimg.com/736x/73/8f/03/738f0320728c34ed684a4d5f3249e536.jpg',
        },
        {
            name : 'pic',
            image : 'https://i.pinimg.com/736x/f9/90/fd/f990fd06fc560aa8ba500cdc95b26cfb.jpg',
        },
        {
            name : 'pic',
            image : 'https://i.pinimg.com/736x/d6/84/0e/d6840e8f3248e3643f943c631f7973f4.jpg',
        },
        {
            name : 'pic',
            image : 'https://i.pinimg.com/736x/73/8f/03/738f0320728c34ed684a4d5f3249e536.jpg',
        },
        {
            name : 'pic',
            image : 'https://i.pinimg.com/736x/f9/90/fd/f990fd06fc560aa8ba500cdc95b26cfb.jpg',
        },
        {
            name : 'pic',
            image : 'https://i.pinimg.com/736x/d6/84/0e/d6840e8f3248e3643f943c631f7973f4.jpg',
        },
        {
            name : 'pic',
            image : 'https://i.pinimg.com/736x/73/8f/03/738f0320728c34ed684a4d5f3249e536.jpg',
        },
    ]
}

export const testimonial = {
    title : 'Happy Clients',
    people : [
        {
            name : "William Smark",
            image : 'https://i.pinimg.com/564x/82/19/e9/8219e955fd50a0eb26959d17f4b173c7.jpg',
            message : 'Well... It is a good service yeah.'
        },
        {
            name : "Sarah Johnson ",
            image : 'https://i.pinimg.com/564x/2a/ac/30/2aac303bf1fad36f2be649dad5e36ce5.jpg',
            message : `It's more than just PERFECT!`
        },
        {
            name : "Angelica Shawn",
            image : null,
            message : 'Cool service & customer service too.'
        },
        {
            name : "Hosh Garbby",
            image : null,
            message : `It's like I'm having the best time ever whenever I enjoy their services.`
        },
    ]
}

export const contactapi = {
    title : "Contact Us",
    desc : "We are open for any suggestion or just to have a chat",
    address : "Yangon , SouthOkkalapa Township , Myanmar",
    phone : '09123456789',
    gmail : 'example@gmail.com',
}