---
title: Checklist
keywords:
  - form
  - checklist
custom_edit_url: null
---

If you happen to have multiple related checkboxes, it might make sense to group them within a single container. In addition
to regular checkboxes, it has select / unselect all feature and submits data in a single list.

The `name` attribute indicates how to reference this component in the query arguments: `q.args.<name-attr>`.

You can see the API for [ui.checklist](/docs/api/ui#checklist) or check the interactive example in Tour app.

## Basic checklist

```py
q.page['example'] = ui.form_card(box='1 1 2 2', items=[
    ui.checklist(name='checklist', label='Choices', choices=[
        ui.choice(name='choice1', label='Choice 1'),
        ui.choice(name='choice2', label='Choice 2'),
        ui.choice(name='choice3', label='Choice 3'),
    ])
])
```

## Setting initial valuess

Checklist preselection is also possible thanks to the `values` attribute. Simply specify the names of the options you wish
to have preselected.

```py
q.page['example'] = ui.form_card(box='1 1 2 2', items=[
    ui.checklist(name='checklist', label='Choices', values=['choice1', 'choice2'], choices=[
        ui.choice(name='choice1', label='Choice 1'),
        ui.choice(name='choice2', label='Choice 2'),
        ui.choice(name='choice3', label='Choice 3'),
    ])
])
```

## Horizontal layout

Checklist renders options vertically (top to bottom) by default, but if you feel like you have a lot of options and
plenty of wasted space, you can go for the `inline` attribute which renders options horizontally (left to right). There's
also no need to worry about lines being too long as the checklist wraps options automatically for you.

```py
q.page['example'] = ui.form_card(box='1 1 2 2', items=[
    ui.checklist(name='checklist', label='Choices', inline=True, choices=[
        ui.choice(name='choice1', label='Choice 1'),
        ui.choice(name='choice2', label='Choice 2'),
        ui.choice(name='choice3', label='Choice 3'),
        ui.choice(name='choice4', label='Choice 4'),
    ])
])
```
