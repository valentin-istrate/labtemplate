import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)

/**
 * Write a description of class Frog here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class Spider extends Enemy
{   
    private int direction = 0;
    public Spider(){
        setMovementSpeed(1);
    }
    
    public Spider(int speed){
        setMovementSpeed(speed);
    }
        
    public void act() {    
        if(atWorldEdge()){
            direction = (direction + 1) % 2;
            setRotation(-180 * direction);
        }
        move(getMovementSpeed());
        eat(Player.class);
    }    
}
