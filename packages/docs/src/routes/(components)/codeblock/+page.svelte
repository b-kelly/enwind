<script lang="ts">
	import { highlight } from '$lib/highlight';
	import Sample from '$lib/Sample.svelte';
	import Section from '$lib/Section.svelte';
</script>

<!-- eslint-disable svelte/no-at-html-tags -->
<Section title="Code block">
	<Sample
		class="flex flex-col gap-sm"
		content={`<pre class=".codeblock"><code>Your highlight.js output</code></pre>`}
	>
		<pre class="codeblock"><code
				>{@html highlight(
					`<!DOCTYPE html>
<title>Title</title>

<body>
  <p checked class="title" id='title'>Title</p>
  <!-- here goes the rest of the page -->
</body>`,
					'xml'
				)}</code
			></pre>

		<pre class="codeblock"><code
				>{@html highlight(
					`class MyClass {
  public static myValue: string;
  constructor(init: string) {
    this.myValue = init;
  }
}
import fs = require("fs");
module MyModule {
  export interface MyInterface extends Other {
    myProperty: any;
  }
}
declare magicNumber number;
myArray.forEach(() => { }); // fat arrow syntax`,
					'typescript'
				)}</code
			></pre>

		<pre class="codeblock"><code
				>{@html highlight(
					`using System.IO.Compression;

#pragma warning disable 414, 3021

namespace MyApplication
{
    [Obsolete("...")]
    class Program : IInterface
    {
        public static List<int> JustDoIt(int count)
        {
            Span<int> numbers = stackalloc int[length];
            Console.WriteLine($"Hello {Name}!");
            return new List<int>(new int[] { 1, 2, 3 })
        }
    }
}`,
					'csharp'
				)}</code
			></pre>
	</Sample>
</Section>
