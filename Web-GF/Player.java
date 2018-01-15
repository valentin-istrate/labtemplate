import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)

/**
 * Write a description of class Player here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class Player extends Animal
{
    private final int MovementSpeed = 2;
    
    public Player()
    {
        setRotation(-90);
    }
    /**
     * Act - do whatever the Player wants to do. This method is called whenever
     * the 'Act' or 'Run' button gets pressed in the environment.
     */
    public void act() 
    {
        setDirection();
        movePlayer();
        eat(Food.class);
        eat(End.class);
    } 
    
    private void setDirection(){
        if(Greenfoot.isKeyDown("left")){
            setRotation(-180);
        }
        else if(Greenfoot.isKeyDown("right")){
            setRotation(0);
        }
        else{
            setRotation(-90);
        }
    }
    
    private void movePlayer(){
        if(Greenfoot.isKeyDown("up") || Greenfoot.isKeyDown("right") || Greenfoot.isKeyDown("left")){
            move(MovementSpeed);
        }
    }
}
