-- 1) 운영프로 리스트
select * from op_pro;

-- 2) 교보재 리스트
select * from book;

-- 3) 교육생 리스트
select * from student;

-- 4) 프로젝트 리스트
select * from project;

-- 5) '정승욱' 운영프로가 담당하는 교육생 리스트 
select st.no, st.name, st.phone from student st
join op_pro pro
on st.pro_num = pro.no
where pro.name = '정승욱';

-- 6) '부울경' 캠퍼스 모든 학생 리스트
select no, name, phone from student
where region = '부울경';

-- 7) 'C언어'책을 빌리고 있는 학생
select st.no, st.name, st.phone from student st
join book bk
on st.name = bk.renter_name
where bk.title='C언어';

-- 8) '영화추천프로젝트' 프로젝트를 진행중인 팀장 정보
select st.no, st.name, st.phone from student st
where st.no = (
	select student_no_1 from project
    where title ='영화추천프로젝트'
    );
    
-- 9) 특화 유형 (2유형) 프로젝트 리스트
select * from project
where type = 2;

-- 10) 빌리고 있는 책이 있는 학생 리스트
select * from student
where rented_book is not null;