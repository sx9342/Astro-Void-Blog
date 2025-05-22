---
title: 'Python 数据结构总结'
description: 'Python 的数据结构十分灵活，比如列表，像 C++ 里面的数组，但又不完全是，比起数组，它的能力更强，不仅是动态的（比如 C++ 的 `vector<int>`），也能混合存储不同的数据类型。得益于灵活的数据结构，使用 Python 处理数据往往更加简单。由于博主在写 Python 相关的程序时，忘记了以前学过的字符串，列表，字典等等的一些处理的函数，故进行总结。'
pubDate: 'Sep 25 2024'
heroImage: '/image/朝靄の街.png'
tags: ["Python","计算机软件"]
---

## 前言
Python 是一种解释型、动态语言，它具有以下特点：

- **简单易用**：Python 的语法简单，容易上手，学习成本低，适合初学者。
- **强大的库和框架**：Python 提供了丰富的库和框架，可以快速实现各种功能。例如，Python 提供了 NumPy、Pandas 等库，可以轻松实现数值计算和数据分析。
- **社区活跃**：Python 社区非常活跃，拥有丰富的资源，可以快速找到需要的帮助。

Python 的数据结构十分灵活，比如列表，像 C++ 里面的数组，但又不完全是，比起数组，它的能力更强，不仅是动态的（比如 C++ 的 `vector<int>`），也能混合存储不同的数据类型。得益于灵活的数据结构，使用 Python 处理数据往往更加简单。由于博主在写 Python 相关的程序时，忘记了以前学过的字符串，列表，字典等等的一些处理的函数，故进行总结。

## 列表

### 基本运用

#### 创建列表
```python
my_list = [1, 2, 3, 4, 5] # 通过将一系列元素放在方括号 [] 中，并用逗号分隔来创建一个列表。
list1 = [] # 也可以在 [] 什么都不写
```

#### 访问列表元素
```python
element = my_list[0]  # 返回 1
```

#### 修改元素
```python
my_list[0] = 10  # [10, 2, 3, 4, 5] 将第一个元素修改为 10
```

#### 添加元素
```python
my_list.append(6)  # [10, 2, 3, 4, 5, 6] 尾插法
my_list.insert(1, 'a')  # [10, 'a', 2, 3, 4, 5, 6] 指定一个位置插入元素
```

#### 删除元素
```python
del my_list[0]  # 删除第一个元素
my_list.remove('a')  # 删除列表中第一个值为 'a' 的元素
last_element = my_list.pop() # 删除并返回列表最后一个元素
popped_element = my_list.pop(1) # 删除并返回列表中索引为 1 的元素
my_list.clear() # 清空列表
```

#### 列表切片
```python
# list[start:stop:step]
my_list = [1, 2, 3, 4, 5]
sliced_list = my_list[1:4]  # [2, 3, 4] 切片是左闭右开区间

# 负索引切片
my_list = ['a', 'b', 'c', 'd', 'e']
print(my_list[-3:])  # 输出 ['c', 'd', 'e']

# 反向切片
my_list = ['a', 'b', 'c', 'd', 'e']
print(my_list[:-3:-1])  # 输出 ['e', 'd', 'c'] 注意这里的顺序是因为步长为 -1
```

#### 获取长度
```python
length = len(my_list)
```

#### 列表迭代
```python
for item in my_list:
    print(item)
```

#### 列表推导式
列表推导式是一种简洁的方式来创建列表，它允许你根据一个或多个表达式生成一个新列表。
```python
[表达式 for 元素 in 可迭代对象 if 条件]

filtered_td_text = [text for text in td_text if text != "详情"]
# 这里表达式是 text，元素是 td_text，条件是 text != "详情"，表达式是要存入列表的值
```

## 字符串

### 创建字符串
```python
my_string = "Hello, World!"
```

### 访问字符串元素
```python
char = my_string[0] # 返回 H
char = my_string[-1] # 返回 !
char = my_string[6:] # 返回 World! 同样可以切片处理
```

### 常见函数

#### 计算字符串长度
```python
s = "hello"
print(len(s))  # 输出 5
```

#### 查找字符串位置
```python
s = "hello world"
print(s.find("world"))  # 输出 6
```

#### 替换字符串中的子字符串
```python
s = "hello world"
print(s.replace("world", "universe"))  # 输出 "hello universe"
```

#### 根据分隔符分割字符串
```python
s = "apple,banana,cherry"
print(s.split(","))  # 输出 ['apple', 'banana', 'cherry']，以列表返回
print(s.split(",", 1))  # 输出 ['apple', 'banana,cherry']，只分割一次
print(s.split()) # 输出 ['apple', 'banana', 'cherry']，默认以空格分割
```

#### 转换
```python
s = "Hello"
print(s.lower()) # 输出 hello，转换为小写
print(s.upper()) # 输出 HELLO，转换为大写
s = "hello world"
print(s.capitalize())  # 输出 "Hello world"，第一个字符为大写，其他为小写
s = "hello world"
print(s.title())  # 输出 "Hello World" 将每个单词的首字母转换为大写
```

#### 检查字符串
```python
s = "Hello World" 
print(s.isdigit()) # 输出 False，检查是否只包含数字
print(s.isalpha()) # 输出 True，检查是否只包含字母
```

#### 格式化
```python
name = "John"
age = 25
print("My name is {}, and I am {} years old.".format(name, age))

print(f"My name is {name}, and I am {age} years old.") # 两种写法均可
```

## 字典

字典类似于哈希表，它存储的是键值对，每个键对应一个值。

### 创建字典
```python
my_dict = {'name': 'Alice', 'age': 25} # 通过键值对创建字典
my_dict = dict(name='Alice', age=25) # 通过关键字参数创建字典
```

### 访问字典元素
```python
value = my_dict['name'] 
print(value) # 输出 Alice
value = my_dict.get('name')
print(value) # 输出 Alice
value = my_dict.get('age')
print(value) # 输出 25
```

### 获取字典的键、值、键值对的视图对象
```python
keys = my_dict.keys()
values = my_dict.values()
items = my_dict.items()

print(keys)  # 输出 dict_keys(['name', 'age'])
print(values) # 输出 dict_values(['Alice', 25])
print(items) # 输出 dict_items([('name', 'Alice'), ('age', 25)])
```

### 添加、修改和删除元素

#### 添加元素
- 直接给一个新的键赋值即可添加新的键值对
```python
my_dict = {'name': 'Alice', 'age': 25}
my_dict['city'] = 'New York'
print(my_dict)  # 输出 {'name': 'Alice', 'age': 25, 'city': 'New York'}
```

- 使用 update() 方法一次性添加多个键值对
```python
my_dict = {'name': 'Alice', 'age': 25}
my_dict.update({'city': 'New York', 'job': 'Engineer'})
print(my_dict)  # 输出 {'name': 'Alice', 'age': 25, 'city': 'New York', 'job': 'Engineer'}
```

#### 修改元素
- 直接赋值
```python
my_dict = {'name': 'Alice', 'age': 25, 'city': 'New York'}
my_dict['age'] = 26
print(my_dict)  # 输出 {'name': 'Alice', 'age': 26, 'city': 'New York'}
```

- 也可以用 update() 方法
```python
my_dict = {'name': 'Alice', 'age': 25, 'city': 'New York'}
my_dict.update({'age': 26})
print(my_dict)  # 输出 {'name': 'Alice', 'age': 26, 'city': 'New York'}
```

#### 删除元素
- del 语句
```python
my_dict = {'name': 'Alice', 'age': 25, 'city': 'New York'}
del my_dict['age']
print(my_dict)  # 输出 {'name': 'Alice', 'city': 'New York'}
```

- pop() 方法
```python
my_dict = {'name': 'Alice', 'age': 25, 'city': 'New York'}
age = my_dict.pop('age')
print(age)  # 输出 25
print(my_dict)  # 输出 {'name': 'Alice', 'city': 'New York'}
```

### 遍历字典

#### 遍历字典的键
```python
my_dict = {'name': 'Alice', 'age': 25, 'city': 'New York'}

for key in my_dict:
    print(key)

# 输出：
# name
# age
# city

# 使用 keys() 方法
for key in my_dict.keys():
    print(key)

# 输出：
# name
# age
# city
```

#### 遍历字典的值
```python
# 遍历字典的值
for value in my_dict.values():
    print(value)

# 输出：
# Alice
# 25
# New York
```

#### 遍历字典的键值对
```python
# 遍历字典的键值对
for key, value in my_dict.items():
    print(f"Key: {key}, Value: {value}")

# 输出：
# Key: name, Value: Alice
# Key: age, Value: 25
# Key: city, Value: New York
```

### 关于字典推导式
字典也可以像列表那样使用推导式来传值，比如说我需要让两个列表一对多映射传入字典里面，可以使用字典推导式来完成。
```python
details_per_name = len(processed_td_text) // len(p_name)
data_dict = {
    p_name[i] : processed_td_text[i * details_per_name : (i + 1) * details_per_name]
    
    for i in range(len(p_name))
        } # 此处存储数据的方法：字典推导式和嵌套切片
```

列表推导式和字典推导式都是 Python 中的高级数据结构，它们允许你根据一个或多个表达式生成一个新列表或字典。
