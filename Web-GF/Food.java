import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)
import java.util.*;

/**
 * Write a description of class Food here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class Food extends Actor
{
    private int points;
    public Food(int value){
        this.points = value;
    }   
    
    public static Food getRandomFood(){
        Random random = new Random();
        int randValue = random.nextInt(3);
        switch (randValue){
            case 0:
                return new Apple();
            case 1:
                return new Banana();
            case 2:
                return new Cherries();
            }
        return new Apple();
    }
    
    public int getPoints(){
        return points;
    }
}
