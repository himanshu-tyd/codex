Form
from
'../
components
/Add
Todo
Form
';

function
Home
()
{

const
[
todos
,
set
Todos
]
=
useState
<string
[]>(
[]
);

const
add
Todo
=
(
new
Todo
:
string
)
=>
{

set
Todos
([...
todos
,
new
Todo
]);

};

const
delete
Todo
=
(
index
:
number
)
=>
{

const
new
Todos
=
[...
todos
];

new
Todos
.splice
(index
,

1
);

set
Todos
(new
Todos
);

};

return
(

<
div
className
="
min
-h
-screen
bg
-gray

- 1
  0
  0
  flex
  items
  -center
  justify
  -center
  ">

  <
  div
  className
  ="
  bg
  -white
  p

- 8
  rounded
  -lg
  shadow
  -lg
  max
  -w
  -md
  w
  -full
  ">

  <
  h
  1
  className
  ="
  text

- 2
  xl
  font
  -bold
  mb
- 6
  ">
  Todo
  App
  </
  h
  1

  >

  <
  Add
  Todo
  Form
  onSubmit
  ={
  add
  Todo
  }
  />

  <
  Todo
  List
  todos
  ={
  todos
  }
  onDelete
  ={
  delete
  Todo
  }
  />

  </
  div

  >

  </
  div

  >

  );

  }

  export
  default
  Home
  ;

  </
  bolt
  Action

  >

  <
  bolt
  Action
  type
  ="
  file
  "
  filePath
  ="
  components
  /T
  odo
  Item
  .ts
  x
  ">

  import
  React
  from
  '
  react
  ';

  import
  {
  Luc
  ide
  Icon
  }
  from
  '
  l
  uc
  ide
  -react
  ';

  interface
  Todo
  Item
  Props
  {

  text
  :
  string
  ;

  onDelete
  :
  ()
  =>
  void
  ;

  }

  function
  Todo
  Item
  ({
  text
  ,
  onDelete
  }:
  Todo
  Item
  Props
  )
  {

  return
  (

  <
  div
  className
  ="
  flex
  justify
  -between
  items
  -center
  mb

- 2
  ">

  <
  span
  className
  ="
  text
  -gray

- 8
  0
  0
  ">{
  text
  }</
  span

  >

  <
  button
  onClick
  ={
  onDelete
  }
  className
  ="
  text
  -red

- 5
  0
  0
  ">

  <
  Luc
  ide
  Icon
  name
  ="
  X
  "
  />

  </
  button

  >

  </
  div

  >

  );

  }

  export
  default
  Todo
  Item
  ;

  </
  bolt
  Action

  >

  <
  bolt
  Action
  type
  ="
  file
  "
  filePath
  ="
  components
  /T
  odo
  List
  .ts
  x
  ">

  import
  React
  from
  '
  react
  ';

  import
  Todo
  Item
  from
  './
  Todo
  Item
  ';

  interface
  Todo
  List
  Props
  {

  todos
  :
  string
  [];

  onDelete
  :
  (
  index
  :
  number
  )
  =>
  void
  ;

  }

  function
  Todo
  List
  ({
  todos
  ,
  onDelete
  }:
  Todo
  List
  Props
  )
  {

  return
  (

  <
  div

  >

  {
  todos
  .map
  ((
  todo
  ,
  index
  )
  =>
  (

  <
  Todo
  Item
  key
  ={
  index
  }
  text
  ={
  todo
  }
  onDelete
  ={()
  =>
  onDelete
  (index
  )}
  />

  ))}

  </
  div

  >

  );

  }

  export
  default
  Todo
  List
  ;

  </
  bolt
  Action

  >

  <
  bolt
  Action
  type
  ="
  file
  "
  filePath
  ="
  components
  /Add
  Todo
  Form
  .ts
  x
  ">

  import
  React
  ,
  {
  useState
  }
  from
  '
  react
  ';

  interface
  Add
  Todo
  Form
  Props
  {

  onSubmit
  :
  (
  new
  Todo
  :
  string
  )
  =>
  void
  ;

  }

  function
  Add
  Todo
  Form
  ({
  onSubmit
  }:
  Add
  Todo
  Form
  Props
  )
  {

  const
  [
  todo
  ,
  set
  Todo
  ]
  =
  useState
  ('');

  const
  handleSubmit
  =
  (
  e
  :
  React
  .Form
  Event
  )
  =>
  {

  e
  .preventDefault
  ();

  if
  (
  todo
  .trim
  ())
  {

  onSubmit
  (todo
  );

  set
  Todo
  ('');

  }

  };

  return
  (

  <
  form
  onSubmit
  ={
  handleSubmit
  }
  className
  ="
  mb

- 4
  ">

  <
  div
  className
  ="
  flex
  ">

  <
  input

  type
  ="
  text
  "

  value
  ={
  todo
  }

  onChange
  ={(
  e
  )
  =>
  set
  Todo
  (e
  .target
  .value
  )}

  placeholder
  ="
  Add
  a
  new
  todo
  "

  className
  ="
  flex

- 1
  p
- 2
  border
  border
  -gray
- 3
  0
  0
  rounded
  -l
  "

  />

  <
  button
  type
  ="
  submit
  "
  className
  ="
  bg
  -blue

- 5
  0
  0
  text
  -white
  p
- 2
  rounded
  -r
  ">

  Add

  </
  button

  >

  </
  div

  >

  </
  form

  >

  );

  }

  export
  default
  Add
  Todo
  Form
  ;

  </
  bolt
  Action

  >

  <
  bolt
  Action
  type
  ="
  file
  "
  filePath
  ="
  next
  -env
  .d
  .ts
  ">

  ///
  <
  reference
  types
  ="
  next
  "
  />

  ///
  <
  reference
  types
  ="
  next
  /image
  -types
  /global
  "
  />

  </
  bolt
  Action

  >

  <
  bolt
  Action
  type
  ="
  file
  "
  filePath
  ="
  ts
  config
  .json
  ">

  {

  "
  files
  ":
  [],

  "
  references
  ":
  [

  {
  "
  path
  ":
  "./
  ts
  config
  .app
  .json
  "
  },

  {
  "
  path
  ":
  "./
  ts
  config
  .node
  .json
  "
  },

  {
  "
  path
  ":
  "./
  next
  -env
  .d
  .ts
  "
  }

  ]

  }

  </
  bolt
  Action

  >

  <
  bolt
  Action
  type
  ="
  shell
  ">

  npm
  run
  dev

  </
  bolt
  Action

  >

</
bolt
Artifact

>

``
`

You
can
now
view
the
Todo
App
by
opening
the
provided
local
server
URL
in
your
browser
.
Use
the
form
to
add
new
todos
and
the
delete
button
to
remove
them
.

stop
prompt tokens: 4925
completion tokens: 2916
