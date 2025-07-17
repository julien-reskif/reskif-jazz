# Todo list example with Jazz and React

Live version: [https://todo.demo.jazz.tools/](https://todo.demo.jazz.tools/)

## Getting started

You can either
1. Clone the jazz repository, and run the app within the monorepo.
2. Or create a new Jazz project using this example as a template.


### Using the example as a template

Create a new Jazz project, and use this example as a template.
```bash
npx create-jazz-app@latest todo-app --example todo
```

Go to the new project directory.
```bash
cd todo-app
```

Run the dev server.
```bash
npm run dev
```

### Using the monorepo

This requires `pnpm` to be installed, see [https://pnpm.io/installation](https://pnpm.io/installation).

Clone the jazz repository.
```bash
git clone https://github.com/garden-co/jazz.git
```

Install and build dependencies.
```bash
pnpm i && npx turbo build
```

Go to the example directory.
```bash
cd jazz/examples/todo/
```

Start the dev server.
```bash
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

## Structure

-   [`src/basicComponents`](./src/basicComponents): simple components to build the UI, unrelated to Jazz (uses [shadcn/ui](https://ui.shadcn.com))
-   [`src/components`](./src/components/): helper components that do contain Jazz-specific logic, but aren't very relevant to understand the basics of Jazz and CoJSON
-   [`src/1_schema.ts`](./src/1_schema.ts),
    [`src/2_main.tsx`](./src/2_main.tsx),
    [`src/3_NewProjectForm.tsx`](./src/3_NewProjectForm.tsx),
    [`src/4_ProjectTodoTable.tsx`](./src/4_ProjectTodoTable.tsx): the main files for this example, see the walkthrough below

## Walkthrough

### Main parts

1. Defining the data model with CoJSON: [`src/1_schema.ts`](./src/1_schema.ts)

2. The top-level provider `<WithJazz/>` and routing: [`src/2_main.tsx`](./src/2_main.tsx)

3. Creating a new todo project: [`src/3_NewProjectForm.tsx`](./src/3_NewProjectForm.tsx)

4. Reactively rendering a todo project as a table, adding and editing tasks: [`src/4_ProjectTodoTable.tsx`](./src/4_ProjectTodoTable.tsx)

### Helpers

-   (not yet explained) Creating Invite Links/QR codes with `<InviteButton/>`: [`src/components/InviteButton.tsx`](./src/components/InviteButton.tsx)

This is the whole Todo List app!

## Questions / problems / feedback

If you have feedback, let us know on [Discord](https://discord.gg/utDMjHYg42) or open an issue or PR to fix something that seems wrong.

## Configuration: sync server

By default, the example app uses [Jazz Cloud](https://jazz.tools/cloud) (`wss://cloud.jazz.tools`) - so cross-device use, invites and collaboration should just work.

You can also run a local sync server by running`npx jazz-run sync`, and setting the `sync` parameter of`JazzReactProvider` in [./src/2_main.tsx](./src/2_main.tsx) to`{ peer: "ws://localhost:4200" }`.
