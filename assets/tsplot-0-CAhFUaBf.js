const e=`---
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

<p><a href="https://www.typescriptlang.org/">Typescript</a> projects can be quite a complex thing, especially as the number of classes, interfaces, and functions grow. It can be hard to keep track of all the moving parts and how they relate to each other. This is where diagramming tools come in handy. They help you visualize the structure of your code and make it easier to understand and maintain.</p>
<h2 id="motivation">Motivation</h2>
<p>In one of the projects I worked on recently, I saw the need to create different kinds of diagrams to assist in understanding the codebase. I searched for different tools that would generate them automatically, but none of them really fit my needs. So I decided to dig a little bit deeper into the domain to potentially come up with something <em>myself</em>. </p>
<p>I thought about using <a href="https://plantuml.com/">PlantUML</a>, but quickly jumped to an even more abstract idea, that would support different text-based output formats in addition, like <a href="https://mermaid.js.org/">Mermaid</a> for example.</p>
<h3 id="initial-feature-ideas">Initial feature ideas</h3>
<ul>
<li>A command-line-interface</li>
<li>Generate class diagrams</li>
<li>Including or excluding project members based on certain criteria<ul>
<li>the kind of member (class, interface, function, etc.)</li>
<li>the decorators applied to a member</li>
<li>the name of a member</li>
</ul>
</li>
<li>Grouping project members by namespace (e.g. <a href="https://www.typescriptlang.org/tsconfig/#paths">Typescript paths</a>)</li>
<li>Support for custom templating</li>
</ul>
<h2 id="prototyping">Prototyping</h2>
<p>I started with a prototype that would generate a class diagram, it was a simple script that would read the <a href="https://www.typescriptlang.org/">Typescript</a> files in a given directory and generate a <a href="https://plantuml.com/">PlantUML</a> class diagram based on the classes and interfaces defined in those files.</p>
<p>Using <a href="https://github.com/phenomnomnominal/tsquery#readme">tsquery</a>, I was able to extract the necessary information from the <code>*.ts</code> files and generate the <a href="https://plantuml.com/">PlantUML</a> code for the class diagram. The prototype was very basic and had a lot of limitations, but it was a good starting point.</p>
<h3 id="1-getting-an-overview-of-a-typescript-project">1. Getting an overview of a Typescript project</h3>
<p>The first step was to extract all the <em>members</em> defined inside the project, by processing each file, and it&#39;s <a href="https://en.wikipedia.org/wiki/Abstract_syntax_tree">AST</a> (abstract syntax tree) representation. The members could be a <code>class</code>, an <code>interface</code>, an <code>enum</code>, a <code>function</code> or a top-level variables.</p>
<p>While resolving all the project <em>members</em>, they are put into a flat list format, which is later used for iteration and filtering.</p>
<h3 id="2-filtering-and-namespacing">2. Filtering and namespacing</h3>
<h3 id="3-generating-the-declarative-diagramming-code">3. Generating the declarative diagramming code</h3>
`;export{e as default};
