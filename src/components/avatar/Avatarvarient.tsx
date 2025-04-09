import { cva } from 'class-variance-authority';


export const avatarVariants = cva(
    ` overflow-hidden aspect-square relative`,
    {
        variants:{
            color:{
                base:'bg-base text-white',
                primary:'bg-primary text-white ',
                ghost:'bg-transparent text-white',
                secondary:'bg-secondary text-white',
                success:'bg-success text-white',
                warning:'bg-warning text-white ',
                danger:'bg-danger text-white '
            },
            size:{
                sm:'w-8 h-8',
                base:'w-10 h-10',
                md:'w-12 h-12',
                lg:'w-16 h-16',
                xl:'w-20 h-20'
            },
            radius:{
                sm:'rounded-md',
                md:'rounded-lg',
                lg:'rounded-xl',
                xl:'rounded-2xl',
                '2xl':'rounded-3xl',
                '3xl':'rounded-4xl',
                full:'rounded-full',
                default:'rounded-full'
            },
            imageRadius:{
                sm:'rounded-sm',
                md:'rounded-md',
                lg:'rounded-lg',
                xl:'rounded-xl',
                '2xl':'rounded-2xl',
                '3xl':'rounded-3xl',
                full:'rounded-full',
                default:'rounded-full'
            },
            isBordered:{
                true:'border-2 border-base p-[2px]',
                false:''
            },
            isDisabled:{
                true:'opacity-50 cursor-not-allowed',
                false:''
            },
        isBorderAnimation:{
            true:'animate-pulse',
            false:''
        }

        
        }
    }

)