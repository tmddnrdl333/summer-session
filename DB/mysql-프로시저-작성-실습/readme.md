## SQL code

#### 저장 프로시저 생성

```mysql
delimiter $$
create procedure `proc_user_insert` (
	in m_id varchar(45),
    in m_name varchar(45),
    in m_campus varchar(45),
    in m_class int,
    in m_gi int
)
begin
	insert into ssafy_user(id,name,campus,class,gi) values (m_id,m_name,m_campus,m_class,m_gi);
end$$
```

#### 저장 프로시저 호출 (실행)

```mysql
call proc_user_insert('ssafy','홍길동','서울',1,6);
```

