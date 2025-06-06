---
draft: true
date: 2024-09-25
title: Typescript Project Plotting
slug: tsplot-0
description: An approach to automate diagram generation for Typescript projects
tags:
  - tsplot
  - typescript
  - diagram
  - plantuml
  - mermaid
---

  [ts]: https://www.typescriptlang.org/
  [puml]: https://plantuml.com/
  [mmd]: https://mermaid.js.org/
  [tsp]: https://github.com/JanUnld/tsplot#readme

[Typescript][ts] projects can be quite a complex thing, especially as the number of classes, interfaces, and functions grow. It can be hard to keep track of all the moving parts and how they relate to each other. This is where diagramming tools come in handy. They help you visualize the structure of your code and make it easier to understand and maintain.

## Motivation

In one of the projects I worked on recently, I saw the need to create different kinds of diagrams to assist in understanding the codebase. I searched for different tools that would generate them automatically, but none of them really fit my needs. So I decided to dig a little bit deeper into the domain to potentially come up with something _myself_. 

I thought about using [PlantUML][puml], but quickly jumped to an even more abstract idea, that would support different text-based output formats in addition, like [Mermaid][mmd] for example.

### Initial feature ideas

  [ts-paths]: https://www.typescriptlang.org/tsconfig/#paths
  [tsp-roadmap]: https://github.com/JanUnld/tsplot/blob/main/ROADMAP.md

- A command-line-interface
- Generate class diagrams
- Including or excluding project members based on certain criteria
  - the kind of member (class, interface, function, etc.)
  - the decorators applied to a member
  - the name of a member
- Grouping project members by namespace (e.g. [Typescript paths][ts-paths])
- Support for custom templating

## Prototyping

I started with a prototype that would generate a class diagram, it was a simple script that would read the [Typescript][ts] files in a given directory and generate a [PlantUML][puml] class diagram based on the classes and interfaces defined in those files.

  [tsq]: https://github.com/phenomnomnominal/tsquery#readme

Using [tsquery][tsq], I was able to extract the necessary information from the `*.ts` files and generate the [PlantUML][puml] code for the class diagram. The prototype was very basic and had a lot of limitations, but it was a good starting point.

### 1. Getting an overview of a Typescript project

  [wiki-ast]: https://en.wikipedia.org/wiki/Abstract_syntax_tree

The first step was to extract all the _members_ defined inside the project, by processing each file, and it's [AST][wiki-ast] (abstract syntax tree) representation. The members could be a `class`, an `interface`, an `enum`, a `function` or a top-level variables.

While resolving all the project _members_, they are put into a flat list format, which is later used for iteration and filtering.

### 2. Filtering and namespacing

### 3. Generating the declarative diagramming code
