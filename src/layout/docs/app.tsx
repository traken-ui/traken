import Avatar from '@/components/avatar/avatar';
import Button from '@/components/button/Button';
import React from 'react';
export default function App() {
  return (
    <div className="flex min-h-screen w-screen flex-col gap-y-8 bg-zinc-500 p-5">

      <Avatar color='success' isBordered={true}/>
      <Avatar color='primary' size='xl'  src='https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Avatar color='primary' size='xl' name='prateek'/>
        <div className="basic">
          <h1 className="mb-2 text-lg text-white">Basic Button</h1>
          <Button onMouseDown={() => console.log('Clicked')}>Hello</Button>
        </div>
        <div className="basic">
          <h1 className="mb-2 text-lg text-white">Color variants</h1>
          <div className="flex flex-wrap gap-5">
            <Button>Default</Button>
            <Button color="primary" >Primary</Button>
            <Button color="secondary">Secondary</Button>
            <Button color="success">Success</Button>
            <Button color="warning">Warning</Button>
            <Button color="danger">Danger</Button>
          </div>
        </div>
        <div className="basic">
          <h1 className="mb-2 text-lg text-white">Size variants</h1>
          <div className="flex flex-wrap items-end gap-5">
            <Button color="primary" size="sm">
              Small
            </Button>
            <Button color="primary" size="md">
              Medium
            </Button>
            <Button color="primary" size="lg">
              Large
            </Button>
            <Button color="primary" size="xl">
              Extra Large
            </Button>
          </div>
        </div>
        <div className="basic">
          <h1 className="mb-2 text-lg text-white">Radius variants</h1>
          <div className="flex flex-wrap gap-5">
            <Button color="primary" rounded="sm">
              Small
            </Button>
            <Button color="primary" rounded="md">
              Medium
            </Button>
            <Button color="primary" rounded="lg">
              Large
            </Button>
            <Button color="primary" rounded="xl">
              Extra Large
            </Button>
            <Button color="primary" rounded="full">
              Full
            </Button>
          </div>
        </div>
        <div className="basic">
          <h1 className="mb-2 text-lg text-white">Type variants</h1>
          <div className="flex flex-wrap gap-5">
            <Button variant="solid" color="primary">
              Solid
            </Button>
            <Button variant="outline" color="primary">
              Outline
            </Button>
            <Button variant="ghost" color="primary">
              Ghost
            </Button>
            <Button variant="flat" color="primary" className="">
              Flat{' '}
            </Button>
          </div>
        </div>
      </div>
    )
}
