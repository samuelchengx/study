
## React出现背景

facebook工程师开发一个菜单栏频繁出bug，当然不是facebook工程师太水，需要深层思考发生问题的原因

### 传统DOM API 关注太多细节

### React思想是始终整体刷新界面
UI问题解决

[{text: 'msg1'}, {text: 'msg2'}] {text: 'msg3'}  =>  ul>li*2 li

[{text: 'msg1'}, {text: 'msg2'},{text: 'msg3'}]  =>  ul>3*li


### React很简单
- 1个新的概念
- 4个必须API
- 单向数据流
- 完善的错误提示

React解决了UI细节问题
数据模型如何解决？ 传统MVC controller model view

### Flux架构： 单向数据流

Flux架构的衍生项目

Redux Mobx

## 以组件方式考虑UI的构建

以评论框为例,将ui组织成组建树的形式

```javascript
class CommentBox extends Component {
    render(){
        return (
            <div className="comment-box">
                <h1>Comments</h1>
                <CommentList />
                <CommentForm />
            </div>
        )
    }
}
```

## 理解React组件

Props + State => View

- 1、React组件一般不提供方法，而是某种状态机
- 2、React组件可以理解为一个纯函数
- 3、单向数据绑定


### 创建一个简单的组件: TabSelect

1、创建静态ui
2、考虑组件的状态组成
3、考虑组件的交互方式

### 受控组件 VS 非受控组件

- 表单元素状态由使用者维护
```javascript
<input
  type="text"
  value={this.state.value}
  onChange={ evt =>
    this.setState({ value: evt.target.value })
  }
/>
```

表单元素状态DOM自身维护
```javascript
<input
  type="text"
  ref={node => this.input = node}
/>
```

### 何时创建组件： 单一职责原则
- 1、每个组件只做一件事
- 2、如果组件变得复杂，那么应该拆分成小组件

### 数据状态管理原则： DRY原则 Don’t Repeat Yourself

- 能计算得到的状态，就不要单独存储
- 组件尽量无状态，所需数据通过props获取

## JSX本质是语法糖而不是模版引擎

- 语法糖使得JS语法看上去像模板，但完全不是模板引擎，不需要学习模板语法。

- JSX本质就是：动态创建组件的语法糖

### 在JSX中使用表达式

- 1、JSX本身也是表达式 const element = <h1>hello world!</h1>
- 2、在属性中使用表达式 <MyComponent foo={1+2+3+4} />
- 3、延展属性 const props = {firstName: 'Ben', lastName: 'Hector' } const greeting = <Greeting {...props} />
- 4、表达式作为子元素 const element = <h1>{props.message}</h1>

### JSX优点

- 声明式创建界面的直观
- 代码动态创建的灵活
- 无需学习新的模版语言








