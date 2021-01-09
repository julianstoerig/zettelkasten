 A list of all the **CSS snippets** I use for my personal obsidian setup. I put them up here so I can link to them and so that you can copy them if you like them.
 
 ## color coded checkboxes
 
 ```css
 /* CHECKBOX: Green / Red color */

.markdown-preview-view .task-list-item-checkbox{
    -webkit-appearance: none;
  box-sizing: border-box;
  border: 1px solid var(--text-muted);
  border-radius: 2px;
  position: relative;
  width: 1.3em;
  height: 1.3em;
  margin: 0;
  outline: none;
  margin-right: 4px;
  margin-bottom: 2px;
  cursor: pointer;
  vertical-align: baseline;

  background-color: #d068688f;
}

.markdown-preview-view .task-list-item-checkbox:checked {
  background-color: #68d0688f;
}
 ```
 
![[📎 - Anhänge/Pasted image 20201218130604.png]]
 
 ## blockquotes
 
 ### add Quotation marks before blockquote
 
```css
/* Add quotation character before quote */
blockquote:before {
  font: 14px/20px italic Times, serif;
  content: "“";
  font-size: 3em;
  line-height: 0.1em;
  vertical-align: -0.4em;
}
blockquote p { display: inline; }
```

![[📎 - Anhänge/Pasted image 20201218130643.png]]

### remove blockquotes left margin

```css
/* Remove blockquote left margin */
blockquote {
  margin-inline-start: 0;
}
```

![[📎 - Anhänge/Pasted image 20201218130942.png]]