import { Column, Entity, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate, Timestamp } from 'typeorm';
import bcrypt from 'bcryptjs';

@Entity('users')
class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column() // empty value is type default 'text'
    email: string;
    
    @Column()
    password: string;

    @Column('timestamp')
    created_at: Date;

    @Column('timestamp')
    updated_at: Date;

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 8);
    }

    @BeforeUpdate()
    updatedAt() {
        this.updated_at = new Date();
    }
}

export default User;