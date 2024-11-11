CREATE TABLE pycoding.board (
	uuid int auto_increment NOT NULL COMMENT 'uuid pk',
	title varchar(100) NOT NULL COMMENT '게시글 제목',
	content varchar(4000) NULL COMMENT '게시글 내용',
	reg_user varchar(100) NULL COMMENT '작성자',
	reg_dtm DATETIME NULL COMMENT '작성일',
	mod_user varchar(100) NULL COMMENT '수정자',
	mod_dtm DATETIME NULL COMMENT '수정일',
	CONSTRAINT board_pk PRIMARY KEY (uuid)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_0900_ai_ci;
